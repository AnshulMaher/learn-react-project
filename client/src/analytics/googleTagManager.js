import TagManager from "react-gtm-module";

let GoogleTagManager = function () {
    let name = "GOOGLE_TAG_MANAGER";
    let isInitialized = false;

    let init = () => {
        if (typeof window !== "undefined") {
            TagManager.initialize({
                gtmId: "GTM-PXFGXWR",
            });
            isInitialized = true;
        }
    };
    let trackEvent = (eventName, eventProperties) => {
        if (typeof window !== "undefined" && isInitialized == true) {
            window.dataLayer.push({
                event: eventName,
                page: window.location.pathname,
                eventProperties,
            });
        }
    };

    let logPageView = () => {
        console.log("window.location.pathname:",window.location.pathname);
        if (typeof window !== "undefined" && isInitialized == true) {
            window.dataLayer.push({
                event: "PAGE_VIEW",
                page: window.location.pathname,
            });
        }
    };

    return {
        name,
        isInitialized,
        logPageView,
        init,
        trackEvent,
    };
};

export default GoogleTagManager();
