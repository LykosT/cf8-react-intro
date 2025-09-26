import {Component} from "react";

type Props = object

type State = {
    count: number
}

class ClassComponentWithState extends Component<Props, State>{  // or React.Component

    constructor(props: Props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1})
    }

    resetCount = () => {
        this.setState({count: 0})
    }

    render() {
        return (
            <>
                <h1 className="text-center my-12">Count is <strong>{this.state.count}</strong></h1>
                <div className="text-center">
                    <button className="bg-cf-dark-gray text-white py-2 px-4 rounded-md "
                            onClick={this.increaseCount}>
                        Increase
                    </button>
                    <button className="bg-cf-dark-red text-white py-2 px-4 rounded-md "
                            onClick={this.resetCount}>
                        Reset
                    </button>
                </div>

            </>
        )
    }
}
export default ClassComponentWithState;