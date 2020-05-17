import React from "react";
import CircleLoader from "react-spinners/MoonLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

class Pending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div>
                <CircleLoader
                    size={50}
                    color={"#123abc"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default Pending;