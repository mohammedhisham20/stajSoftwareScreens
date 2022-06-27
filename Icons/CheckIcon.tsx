import React from 'react';
import { Svg, Path } from 'react-native-svg';
type IconProps = {
    color?: string;
    size?: number;
};
export const CheckIcon: React.FC<IconProps> = ({
    size = 20,
}) => {
    return (

        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#20AC0C" />
            <Path d="M8.48438 15.1875L3.875 10.5781C3.8125 10.5156 3.8125 10.4219 3.875 10.3594L5.20313 9.03125C5.26563 8.96875 5.35938 8.96875 5.42188 9.03125L8.59375 12.2031L14.5625 6.23438C14.625 6.17188 14.7188 6.17188 14.7813 6.23438L16.1094 7.5625C16.1719 7.625 16.1719 7.71875 16.1094 7.78125L8.70313 15.1875C8.64063 15.25 8.54688 15.25 8.48438 15.1875Z" fill="white" />
        </Svg>










    );
};