import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="wrap section" role="alert" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>Something went wrong</h1>
          <p style={{ maxWidth: '520px', margin: '0 auto 28px', color: 'var(--muted, #42536b)' }}>
            An unexpected error occurred while loading this section. Please try reloading or returning to the home page.
          </p>
          <div style={{ display: 'inline-flex', gap: '14px', justifyContent: 'center' }}>
            <button
              type="button"
              className="button"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try again
            </button>
            <button
              type="button"
              className="button light"
              onClick={this.handleReset}
            >
              Return Home
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
