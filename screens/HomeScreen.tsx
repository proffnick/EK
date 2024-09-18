import React, { 
  useState, 
  useCallback, 
  useEffect } from "react";
import useStyle from "../assets/style/style";
import { TopNav } from "../components/navigation/TopNav";
import { SafeAreaViewWrapper } from "../components/SafeAreaViewWrapper";
import { RandomText } from "../components/widgets/RandomText";
import { ActionButton } from "../components/widgets/ActionButton";
import { UploadButton } from "../components/widgets/UploadButton";
import { constants } from "../utility/cache";
import { HorizontalLines } from "../components/widgets/HorizontalLine";
import { VideoReels } from "../components/VideoReels";
import { VideoObject } from "../interfaces";
import { SimpleLoader } from "../components/widgets/SimpleLoader";
import { API } from "../api/api";
import { View } from "react-native";

export const HomeScreen: React.FC = (): React.JSX.Element => {
  const STYLE = useStyle();
  const [data, setData] = useState<VideoObject[] | []>();
  const [loading, setLoading] = useState(true);

  const fetchVideos = useCallback(() => {
    try {
      API.fetchVideos(true).then( result => {
        setData([...result]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error, ' error fetching');
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return(
    <SafeAreaViewWrapper>
      <TopNav />
      <RandomText/>
      <RandomText 
        text={constants.action_text}
        containerStyle={STYLE.actionTextContainerStyle}
        TextStyle={STYLE.actionTextStyle}
      />
      <ActionButton />
      <HorizontalLines />
      <RandomText
        text={constants.media_title}
        containerStyle={STYLE.titleWithIconContainer}
        TextStyle={STYLE.leadingTitleTextStyle}
        isTitleWIthIcon
      />
      {!data?.length && 
      <View style={STYLE.reelVideoItemContainer}>
        <SimpleLoader loading={loading} />
      </View>
      }
      {data?.length && 
      <VideoReels DATA={[...data]}  />
      }
      <UploadButton onPress={() => null} />
    </SafeAreaViewWrapper>
  )
}