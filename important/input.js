import React from "react";

class Input extends React.Component {
    //1 componentDidMount
    componentDidMount() {
        console.log('componentDidMount')
    }
    //2 componentDidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    //3 componentWillUnmount
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    //4 shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //console.log(nextContext)
    }
    //5  getDriverStateFromProps
    getDriverStateFromProps(props, state){
        console.log('getDriverStateFromProps')
    }
    //6 getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
    }
    //7 componentDidCatch
    componentDidCatch(error, errorInfo) {
       console.log('componentDidCatch')
    }

    render() {
        return (
            <Input type="text" placeholder={'input some text'} />
    );
  }
}

export default Input;