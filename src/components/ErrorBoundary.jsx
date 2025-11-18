import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // You could log this to a monitoring service
    // console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-xl">
            <p className="text-white/80">Interactive scene failed to load.</p>
            <p className="mt-2 text-sm text-white/60">This doesn’t affect the story. You can still continue below.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
