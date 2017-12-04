    import * as React from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
    export interface TabContainerProps {
        /**
         * Define for rendered scene
         */
        sceneStyle?: ViewStyle;
    
        /**
         * Define style for TabBar
         */
        tabBarStyle?: ViewStyle;
    
        /**
         * Define shadow style for tabBar
         */
        tabBarShadowStyle?: ViewStyle;
    
        /**
         * Disable onPress opacity for Tab
         *
         * @default false
         */
        hidesTabTouch?: boolean;
    }
    
    interface TabContainerItemProps {
        /**
         * Allow font scaling for title
         */
        allowFontScaling?: boolean;
    
        /**
         * Text for Item badge
         */
        badgeText?: string | number;
    
        badgeStyle?:ViewStyle;
    
        /**
         * Return whether the item is selected
         */
        selected?: boolean;
    
        /**
         * Styling for selected Item title
         */
        selectedTitleStyle?: TextStyle;
    
        /**
         * Styling for tab
         */
        tabStyle?: ViewStyle;
    
        /**
         * Item title
         */
        title?: string;
    
        /**
         * Styling for Item title
         */
        titleStyle?: TextStyle;
    
        /**
         * onPress method for Item
         */
        onPress?(): void;
    
        /**
         * Returns Item badge
         */
        renderBadge?(): JSX.Element;
    
        /**
         * Returns Item icon
         */
        renderIcon?(): JSX.Element;
    
        /**
         * Returns selected Item icon
         */
        renderSelectedIcon?(): JSX.Element;
    }
    
    export class TabContainer extends React.Component<TabContainerProps, any> {}
    
    export namespace TabContainer {
        class Item extends React.Component<TabContainerItemProps, any> {}
    }
    
    export default TabContainer;


