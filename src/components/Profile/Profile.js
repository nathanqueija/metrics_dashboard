import React from 'react';
import Currency from 'components/Currency';
import withStyle from './Profile.style';

const Profile = ({ className, user: { name, saldo, sent, overdue } }) => (
  <div className={className}>
    <div className="info">
      <span>{name}</span>
    </div>
    <div className="data">
      <Currency name="Saldo" value={saldo} />
      <Currency name="Sent" value={sent} />
      <Currency name="Overdue" value={overdue} />
    </div>
  </div>
);

export default withStyle(Profile);
