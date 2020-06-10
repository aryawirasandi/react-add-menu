const size = {
    mobileSmall: '320px',
    mobileMedium: '375px',
    mobileLarge: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopLargest: '1440px',
    desktop: '2560px'
}

const device = {
    mobileSmall : `(min-width : ${size.mobileSmall})`,
    mobileMedium : `(min-width : ${size.mobileMedium})`,
    mobileLarge : `(min-width : ${size.mobileLarge})`,
    tablet : `(min-width : ${size.tablet})`,
    laptop : `(min-width : ${size.laptop})`,
    laptopLargest : `(min-width : ${size.laptopLargest})`,
    desktop : `(min-width : ${size.desktop})`,
}

export default device;