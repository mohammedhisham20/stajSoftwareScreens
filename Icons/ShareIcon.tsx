import React from 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
type IconProps = {
    color?: string;
    size?: number;
};
export const ShareIcon: React.FC<IconProps> = ({
    size = 32,
}) => {
    return (

        <Svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G filter="url(#filter0_d_70_4159)">
                <Circle cx="14" cy="14" r="12" fill="#E6F5E4" />
            </G>
            <Path d="M17.6028 15.9712C16.919 15.9712 16.3039 16.2588 15.8673 16.718L10.7648 14.2198C10.7823 14.1024 10.7944 13.9836 10.7944 13.8613C10.7944 13.7422 10.7829 13.626 10.7662 13.5118L15.8612 11.041C16.2982 11.5038 16.9161 11.7944 17.6028 11.7944C18.9267 11.7944 20 10.7211 20 9.3972C20 8.07303 18.9267 7 17.6028 7C16.2789 7 15.2056 8.07303 15.2056 9.3972C15.2056 9.5163 15.2171 9.63223 15.2338 9.74672L10.1388 12.2176C9.7018 11.7547 9.08417 11.4641 8.3972 11.4641C7.07303 11.4641 6 12.5375 6 13.8613C6 15.1855 7.07303 16.2585 8.3972 16.2585C9.081 16.2585 9.69605 15.9709 10.1327 15.5117L15.2352 18.0099C15.2177 18.127 15.2056 18.2461 15.2056 18.3683C15.2056 19.6925 16.2789 20.7655 17.6028 20.7655C18.9267 20.7655 20 19.6925 20 18.3683C20 17.0442 18.9267 15.9712 17.6028 15.9712Z" fill="#FF200C" />

        </Svg>









    );
};