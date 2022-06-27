import React from 'react';
import { Svg, Path } from 'react-native-svg';
type IconProps = {
    color?: string;
    size?: number;
};
export const ArrowIcon: React.FC<IconProps> = ({
    size = 24,
}) => {
    return (

        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M14 7L9 12L14 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>









    );
};