import React from 'react';

import { StyledBox, StyledMain } from './styles';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { isError: false };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  handleClick() {
    document.location.replace('/');
  }

  render() {
    if (this.state.isError) {
      return (
        <StyledMain>
          <StyledBox>
            <h2>Ой... Что-то пошло не так</h2>
            <button onClick={this.handleClick}>Вернуться на главную</button>
          </StyledBox>
        </StyledMain>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
