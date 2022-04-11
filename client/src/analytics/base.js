let createAnalytics = function () {
    let modules = [];
    let registerModule = function (module) {
        modules.push(module);
    };

    let init = function () {
        modules.forEach((m) => {
            m.init();
        });
    };

    let eventsFunctions = {
        trackEvent: function (eventName, eventProperties = {}, exclude = "") {
            if (typeof window !== "undefined") {
                if (process.env.APP_ENV === "development") {
                    console.log("Event Fired: ", eventName);
                }
                let properties = {
                    eventCategory: "",
                    eventLabel: "",
                    section: "",
                    subSection: "",
                    pathname: window.location.pathname,
                    ...eventProperties,
                };
                modules.forEach((m) => {
                    if (!exclude.includes(m.name) && Object.prototype.hasOwnProperty.call(m, "trackEvent")) {
                        m.trackEvent(eventName, properties);
                    }
                });
            }
        },
        identify: function (data, exclude = "") {
            if (typeof window !== "undefined") {
                if (process.env.APP_ENV === "development") {
                    console.log("Identify Event Fired: ", data);
                }
                modules.forEach((m) => {
                    if (!exclude.includes(m.name) && Object.prototype.hasOwnProperty.call(m, "identify")) {
                        m.identify(data);
                    }
                });
            }
        },
        logPageView: function (exclude = "") {
            if (typeof window !== "undefined") {
                if (process.env.APP_ENV === "development") {
                    console.log("Page View Event Fired: ", window.location.pathname);
                }
                modules.forEach((m) => {
                    if (!exclude.includes(m.name) && Object.prototype.hasOwnProperty.call(m, "logPageView")) {
                        m.logPageView();
                    }
                });
            }
        },
    };

    return {
        registerModule,
        init,
        eventsFunctions,
    };
};

export default createAnalytics;
