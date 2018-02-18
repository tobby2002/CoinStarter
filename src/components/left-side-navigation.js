import React from 'react';

const LeftSideNavigation = () => {
  return (
    <div className="col-sm-2 sidenav">
      <p><a href="/ticker">현재시세 확인</a></p>
      <p><a href="/bitcoin">Bitcoin 마진 확인</a></p>
      <p><a href="/altcoin">Altcoin 마진 확인</a></p>
      <p><a href="/margin">마진 거래 비율 통계</a></p>
    </div>
  );
};

export default LeftSideNavigation;