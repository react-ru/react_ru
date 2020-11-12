import React from 'react'

export const LoginWithTelegram = ({
  width,
  height,
  login,
  origin,
  size = 'medium'
}) => {
  return (
    <button
      style={{
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: '13px',
        lineHeight: '17px',
        padding: '5px 14px 6px',
        borderRadius: '14px',
        fontWeight: '500',
        color: '#20232a', // '#ffffff',
        border: 'none',
        backgroundColor: '#ffffff', // '#53a9eb',
        cursor: 'pointer'
      }}
    >
      <img
        width={19}
        height={17}
        style={{ margin: '0 9px 0 -4px', filter: 'invert(0.8)' }}
        src='data:image/svg+xml,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m1.95617055%2011.392196c5.77764656-2.42328736%209.63031585-4.02086673%2011.55800785-4.79273807%205.5039525-2.20384954%206.6476266-2.5866818%207.3930574-2.59932314.1639507-.00278035.5305319.0363352.7679878.22182361.2005031.15662277.2556695.36819788.2820684.51669348.026399.1484956.0592719.48677234.0331404.75109194-.2982611%203.0169019-1.5888322%2010.33812718-2.2454015%2013.71710898-.2778191%201.4297738-.8288514%201.7357846-1.3584441%201.7826999-1.1509274.1019576-2.0208916-.5588425-3.1356211-1.2622918-1.7443316-1.1007592-2.3854935-1.3972358-4.0786694-2.4713734-1.95675765-1.2413519-.8891962-1.8911034.2259543-3.0061212.2918402-.2918054%205.3989024-4.83750096%205.497052-5.24030969.0122753-.05037796-.1557336-.55407742-.2716182-.65323489-.1158847-.09915747-.2869204-.06524947-.4103446-.03828214-.17495.03822537-2.9615423%201.81132342-8.35977698%205.31929412-.79096496.5228681-1.50739646.7776269-2.1492945.7642766-.70764107-.0147176-2.06885864-.3851791-3.08078398-.7018404-1.24116762-.388398-1.69932554-.5713149-1.61342745-1.2309348.04474105-.3435709.36011227-.7024173.94611366-1.0765391z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E'
        alt='Telegram Icon'
      />
      Log in with&nbsp;<b>Telegram</b>
    </button>
  )
  // return (
  //   <iframe
  //     src={`http://oauth.telegram.org/embed/${login}?origin=${origin}&size=${size}"`}
  //     title='Login with Telegram'
  //     width={width}
  //     height={height}
  //     frameBorder='0'
  //     scrolling='no'
  //     style={{
  //       width,
  //       height,
  //       border: 'none',
  //       overflow: 'hidden'
  //     }}
  //   />
  // )
}
