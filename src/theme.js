const palette = {
    white: "#F1ECCE",
    azure: "#F2FDFF",
    black: "#070d18",
    blue: "#355dae",
    red: "#7c2529",
    olive: "#ae4a35",
    bronze: "#ae4a35",
    brown: "#ae8635",
    green: "rgb(53,174,134)"
};

const fontStyles = {
    normal: "400",
    bold: "900"
};

const colors = {
    primaryTextColor: palette.black,
    green: palette.green,
    buttonTextColor: palette.azure,
    mainBackgroundColor: palette.white,
    buttonBackgroundColor: palette.blue,
    inputBackgroundColor: palette.azure,
    headerBackgroundColor: palette.olive,
    footerBackgroundColor: palette.brown,
    cardBackgroundColor: palette.azure,
    buttonBoxShadow: "0 2px 14px 4px rgba(53, 64, 134, 0.60)",
    cardBoxShadow: "0 2px 14px 4px rgba(53,174,134, 0.60)"
};

const spacing = {
    xsmall: ".5rem", //8px
    small: "1rem", //16px
    medium: "2rem", //32px
    large: "4rem", //64px
    xlarge: "6rem", //94px
    xxlarge: "8rem",
    xxxlarge: "10rem"
};

const fontSizing = {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem"
};

const containerSizing = {
    small: "",
    medium: "25rem",
    large: "50rem"
};

const cardStyles = (maxWidth) => {
    return {
        maxWidth: maxWidth,
        boxShadow: colors.cardBoxShadow,
        margin: 0,
        borderRadius: 7,
        backgroundColor: colors.cardBackgroundColor,
        objectFit: 'cover'
    };
};

const cardTitleStyles = (fontSize) => {
    return {
        fontSize: fontSize,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingTop: spacing.small,
        margin: 0,
        fontWeight: fontStyles.bold,
        textAlign: 'center'
    };
};

export { colors, spacing, fontSizing, fontStyles, containerSizing, cardStyles, cardTitleStyles };