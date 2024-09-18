import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { Constants } from '../interfaces';
import { DayjsDiffUnit } from "../types";

/***
 * This file is built to handle caching 
 * in order to improve app's perfomance
 * The logic is that if caching by [check_expiry]
 * variable is provided and the value is true, the
 * the app gets data stored on the phone instead.
 * In larger project, a deferent mechanism can be used.
 ***/

/* 
  In larger projects, the constant below can be used  in a separete file
  It could also be loaded from API or external resource
*/
const constants:Constants = {
  cached_in_text: 'minute',
  cache_prefix: '@ekvent',
  cache_time: 10,
  logo_image_width: 180,
  logo_image_height: 29,
  profile_height: 28,
  profile_width: 28,
  default_icon_size: 20,
  report_icon_size: 30,
  welcome_text: 'Hello John,',
  action_text: 'Please tap below',
  title_title: 'Large font title',
  title_sub_title: 'Sub-title 💎💎💎',
  media_title: 'Media',
  upload_text: 'Upload' 
};

// store object with a provided key
const store = async (key:string, value:any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(
      constants.cache_prefix + key,
      JSON.stringify(item),
    );
    return true;
  } catch (error) {
    return false;
  }
};

// check expiration of item
const isExpired = (item:any) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, constants.cached_in_text as DayjsDiffUnit) > constants.cache_time;
};

/**
  Get cached resource if they are available
**/
const get = async (key:string, check_expiry:boolean = true) => {
  try {
    const value:any = await AsyncStorage.getItem(constants.cache_prefix + key);
    const item = JSON.parse(value);
    if (!item) return null;
    if (isExpired(item) && check_expiry) {
      await AsyncStorage.removeItem(constants.cache_prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    return null;
  }
};

export {
  store,
  get,
  constants
};
