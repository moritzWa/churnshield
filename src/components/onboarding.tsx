// OnboardingUI.tsx
import React from 'react';
import './onboarding.css';

type OnboardingUIProps = {
  userName: string;
};

const OnboardingUI: React.FC<OnboardingUIProps> = ({ userName }) => {
  return (
    <div className="onboarding-ui">
      <h1 className="onboarding-title">Hey {userName}, it looks like you are trying to connect your NameCheap DNS Server.</h1>
      <ul className="onboarding-list">
        <li>You forgot to input the TTL value. The correct value is 60.</li>
        <li>You selected the Wrong Type: The correct Type is CNAME.</li>
      </ul>
      <button className="onboarding-button">Fill out correct values</button>
      <button className="onboarding-button">Ask Follow Up</button>
    </div>
  );
};

export default OnboardingUI;