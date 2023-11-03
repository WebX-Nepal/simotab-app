import React, { Component } from 'react';
import "./ScrollToTop.css";

class ScrollToTopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 100) {
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    };

    handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    render() {
        const { isVisible } = this.state;

        return (
            isVisible && (
                <button
                    onClick={this.handleScrollToTop}
                    className="scroll-to-top-button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <rect x="0.0323486" y="0.921387" width="35.9661" height="35.9661" rx="10" fill="white" />
                        <path d="M18.7225 8.25774C18.332 7.86721 17.6988 7.86721 17.3083 8.25774L10.9443 14.6217C10.5538 15.0122 10.5538 15.6454 10.9443 16.0359C11.3348 16.4264 11.968 16.4264 12.3585 16.0359L18.0154 10.3791L23.6722 16.0359C24.0628 16.4264 24.6959 16.4264 25.0864 16.0359C25.477 15.6454 25.477 15.0122 25.0864 14.6217L18.7225 8.25774ZM17.0154 28.8442C17.0154 29.3965 17.4631 29.8442 18.0154 29.8442C18.5677 29.8442 19.0154 29.3965 19.0154 28.8442L17.0154 28.8442ZM17.0154 8.96484L17.0154 28.8442L19.0154 28.8442L19.0154 8.96484L17.0154 8.96484Z" fill="url(#paint0_linear_151_438)" />
                        <defs>
                            <linearGradient id="paint0_linear_151_438" x1="18.0154" y1="28.8442" x2="16.0204" y2="28.7439" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2D2F84" />
                                <stop offset="1" stopColor="#662E91" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            )
        );
    }
}

export default ScrollToTopButton;
