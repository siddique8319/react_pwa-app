
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Accordion from 'react-bootstrap/Accordion';
function App() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Progressive Web Application</Accordion.Header>
        <Accordion.Body>
        A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

Like a website, a PWA can run on multiple platforms and devices from a single codebase. Like a platform-specific app, it can be installed on the device, can operate while offline and in the background, and can integrate with the device and with other installed apps.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>History of web app installation</Accordion.Header>
        <Accordion.Body>
        In these tutorials, you'll build a PWA from scratch. Tutorials walk through the steps of creating an app, from start to finish, explaining how the different features of the app are implemented.

Creating your first PWA
This novice-level tutorial walks through the creation of a PWA to track menstrual cycles. Lessons include a walk through of the HTML, CSS, and JavaScript required to create a fully functional web app, setting up a testing environment, and complete explanations guiding the learner through upgrading the web app into a PWA; including developing and inspecting a manifest, adding a service worker, and using the service worker to delete stale caches.

Deep dive into PWA
This intermediate-level tutorial walks through the creation of a PWA that lists information about games submitted to the A-Frame category in the js13kGames 2017 competition. This tutorial includes all the basics for creating a PWA, with additional features, including notifications, push, and app performance.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Installing PWAs</Accordion.Header>
        <Accordion.Body>
        The UI for installing a PWA from the web varies from one browser to another, and from one platform to another.

The user interface for installing PWAs differs by device and OS combination. The "Add to homes screen" user interface installs the PWA on Safari on iOS. Other browsers, including Chrome for Android, include the app installation command in the browser setting menu. In Chrome and Edge on desktop, when the user navigates to the page, if the page is a PWA and the PWA is not currently installed by the browser, an installation icon will be visible in the URL bar:
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    
  );
}

export default App;
