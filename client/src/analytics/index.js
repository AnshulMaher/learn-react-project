import GoogleTagManager from "./googleTagManager";
import createAnalytics from "./base";

let analytics = createAnalytics();

analytics.registerModule(GoogleTagManager);
analytics.init();

let trackEvent = analytics.eventsFunctions.trackEvent;
let identify = analytics.eventsFunctions.identify;
let logPageView = analytics.eventsFunctions.logPageView;

export { trackEvent, identify, logPageView };
