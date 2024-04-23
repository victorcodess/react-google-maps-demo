import {
  APIProvider,
  AdvancedMarker,
  // InfoWindow,
  Map,
  // Marker,
} from "@vis.gl/react-google-maps";

const App = () => (
  <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
    <Map
      style={{ width: "100vw", height: "100vh" }}
      defaultCenter={{ lat: 53.54992, lng: 10.00678 }}
      defaultZoom={12}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      mapId={import.meta.env.VITE_MAP_ID}
    >
      <AdvancedMarker
        position={{ lat: 53.54992, lng: 10.00678 }}
        className="w-[250px] bg-white flex flex-col items-center gap-1 py-3 px-3 rounded-xl shadow-xl bo rder-2 border-red-300 mb-"
      >
        <h2 className="text-[20px] font-medium">I am so customized</h2>
        <p>That is pretty awesome!</p>

        <svg
          className="absolute text-white h-10 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon
            className="fill-current shadow-lg"
            points="0,0 127.5,127.5 255,0"
          />
        </svg>
      </AdvancedMarker>
    </Map>
  </APIProvider>
);

export default App;
