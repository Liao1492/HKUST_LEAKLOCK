import { ImageSourcePropType } from "react-native";
import { CardType } from "../components/CardHome";
import {
  ResponsiveValue,
  ColorType,
} from "native-base/lib/typescript/components/types";
import YTMusicPNG from "../assets/ytmusic.png";
import AdidasPNG from "../assets/adidas.png";
import ApplePodPNG from "../assets/apple_podcast.png";
import AppleMusicPNG from "../assets/applemusic.png";
import NikeGreenPNG from "../assets/nikegreen.png";
import NikeTrainingPNG from "../assets/niketraining.png";
import WalkingPNG from "../assets/walking.png";
import SpotifyPNG from "../assets/spotify.png";
// import  from "../assets/";

import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";

export interface IApp {
  title: string;
  imgUrl: ImageSourcePropType;
  bgColor?: ResponsiveValue<ColorType | ILinearGradientProps>;
}

export const appList: Record<CardType, IApp[]> = {
  Game: [],
  Listen: [
    { title: "YouTube Music", imgUrl: YTMusicPNG },
    { title: "Spotify", imgUrl: SpotifyPNG },
    { title: "Apple Music", imgUrl: AppleMusicPNG },
    { title: "Apple Podcats", imgUrl: ApplePodPNG },
  ],
  Health: [
    {
      title: "Nike Running Club",
      imgUrl: NikeTrainingPNG,
      bgColor: "gray.900",
    },
    { title: "Nike Training Club", imgUrl: NikeGreenPNG },
    { title: "Walking Man", imgUrl: WalkingPNG },
    { title: "Adidas Training", imgUrl: AdidasPNG },
  ],
  Watch: [],
  Travel: [],
};
