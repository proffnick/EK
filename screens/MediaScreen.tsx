import React, { 
  useState, 
  useCallback, 
  useEffect, 
  Fragment } from "react";
import { 
  VideoObject, 
  FullVideoView 
} from "../interfaces";
import { TopNav } from "../components/navigation/TopNav";
import { API } from "../api/api";
import { useRoute } from '@react-navigation/native';
import { VideoReelsFullView } from "../components/VideoReelsFullView";
import { SimpleLoader } from "../components/widgets/SimpleLoader";
import { useIsFocused } from '@react-navigation/native';

export const MediaScreen: React.FC = (): React.JSX.Element => {
  const [data, setData] = useState<VideoObject[] | []>();
  const route = useRoute();
  const isFocused = useIsFocused();

  /**
   * If we get an id and a playlist
   * It was a selection from the 
   * user, otherwise we use the existing
  **/
  const { index, videos } = (route?.params as FullVideoView) || {index: undefined, videos: []};

  /***
   * In a situation where the user navigates to the media screen
   * Without clicking on any video
   * we are prefetching the playlist here
  ***/

  const fetchVideos = useCallback(() => {
    try {
      API.fetchVideos(true).then( result => {
        setData([...result]);
      });
    } catch (error) {
      console.log(error, ' error fetching');
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  /***
   * If we have a user selection from the
   * Home screen, then proceed
   * With the preview
  ***/

  if((typeof(index) === 'number' && videos.length > 0) && isFocused){
    return (
      <Fragment>
        <TopNav isMedia />
        <VideoReelsFullView index={index} videos={videos} />
      </Fragment>
    )
  }

  /***
   * If no user selection from the
   * Home screen, but we have a playlist
   * the proceed With the preview
  ***/

  if((typeof index === 'undefined' && data?.length) && isFocused){
    return (
      <Fragment>
        <TopNav isMedia />
        <VideoReelsFullView index={0} videos={data} />
      </Fragment>
    )
  }

  /***
   * If Evereything fails
   * Show lofing screen
  ***/

  return (
    <Fragment>
      <TopNav isMedia />
      <SimpleLoader loading={true} />
    </Fragment>
  )

}