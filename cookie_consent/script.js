(function() {
    'use strict';

    // Constructor function for the CookieConsentPopup
    function CookieConsentPopup(message) {
        // Create the cookie popup element
        this.cookiePopup = document.createElement('div');
        this.cookiePopup.className = 'cookie-popup';
        this.cookiePopup.innerHTML = `
            <div class="cookie-popup-content">
                `+message+`
            </div>
            <div class="cookie-popup-buttons">
                <button class="cookie-accept">Accept</button>
                <button class="cookie-decline">Decline</button>
            </div>
        `;

        // Attach the click event listeners to the buttons
        const acceptButton = this.cookiePopup.querySelector('.cookie-accept');
        acceptButton.addEventListener('click', this.handleAccept.bind(this));

        const declineButton = this.cookiePopup.querySelector('.cookie-decline');
        declineButton.addEventListener('click', this.handleDecline.bind(this));

        // Append the cookie popup to the body
        document.body.appendChild(this.cookiePopup);

        // Check if the user has previously made a choice
        if (localStorage.getItem('cookieChoice')) {
            this.cookiePopup.style.display = 'none';
        } else {
            this.cookiePopup.classList.add('show');
        }
    }

    CookieConsentPopup.prototype.handleAccept = function() {
        // Store user's choice in local storage
        localStorage.setItem('cookieChoice', 'accepted');
        this.cookiePopup.style.display = 'none';
    };

    CookieConsentPopup.prototype.handleDecline = function() {
        // Store user's choice in local storage
        localStorage.setItem('cookieChoice', 'declined');
        this.cookiePopup.style.display = 'none';
    };

    // Export the CookieConsentPopup as a global function or as an ES module
    if (typeof window === 'object') {
        window.CookieConsentPopup = CookieConsentPopup;
    }
    if (typeof exports === 'object') {
        module.exports = CookieConsentPopup;
    }
})();
