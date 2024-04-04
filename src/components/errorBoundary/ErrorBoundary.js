import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


// import React, { useState } from "react";
// import ErrorMessage from "../errorMessage/ErrorMessage";

// const ErrorBoundary = ({ children }) => {
//   const [error, setError] = useState(false);

//   const componentDidCatch = (error, errorInfo) => {
//     console.log(error, errorInfo);
//     setError(true);
//   };

//   componentDidCatch();

//   if (error) {
//     return <ErrorMessage />;
//   }

//   return children;
// };

// export default ErrorBoundary;