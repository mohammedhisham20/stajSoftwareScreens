import React from 'react';
import { Svg, Path } from 'react-native-svg';
type IconProps = {
    color?: string;
    size?: number;
};
export const DownArrow: React.FC<IconProps> = ({
    size = 24,
}) => {
    return (
        <Svg width="15" height="20" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 1L6 6L11 1" stroke="#005C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>










    );
};