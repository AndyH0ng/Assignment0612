function cam() {
    capture = createCapture({
        audio: false,
        video: {
            facingMode: {
                exact: "user"
            }
        }
    });
}