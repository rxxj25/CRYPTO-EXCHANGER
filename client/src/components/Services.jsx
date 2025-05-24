import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="service-card">
    <div className="icon-container" style={{ backgroundColor: color }}>
      {icon}
    </div>
    <div className="service-content">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="services-section gradient-bg-services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide highly secure, transparent, and efficient blockchain-based
          solutions to serve your business and personal needs.
        </p>
      </div>

      <ServiceCard
        color="#2952E3"
        title="Security Guaranteed"
        icon={<BsShieldFillCheck size={24} color="white" />}
        subtitle="Security is guaranteed. We maintain privacy and integrity."
      />

      <ServiceCard
        color="#F84550"
        title="Fastest Transactions"
        icon={<RiHeart2Fill size={24} color="white" />}
        subtitle="Security is guaranteed, we maintain privacy and quality of our products."
      />
    </div>
  );
};

export default Services;
