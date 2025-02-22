import "@google/model-viewer";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        
        {/* Welcome Text - Now on Top */}
        <h2 className="text-2xl font-bold">Welcome to MyChat!</h2>
        
        {/* 3D Model Display */}
        <div className="flex justify-center gap-4 mb-4">
          <model-viewer
            src="look.glb"
            alt="3D Model"
            autoplay
            camera-controls
            disable-zoom
            style={{
              width: "100%",
              height: "390px",
              maxWidth: "500px",
            }}
           
            
          ></model-viewer>
        </div>

        {/* Instructional Text */}
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
        <p className="text-base-content/60 mt-4">
          <strong>Developed by Rishi Kasliwal</strong>
        </p>

      </div>
    </div>
  );
};

export default NoChatSelected;
