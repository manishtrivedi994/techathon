// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service
    console.log('Error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Something went wrong.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
  },
  text: {
    color: '#721c24',
    fontSize: 18,
  },
});

export default ErrorBoundary;