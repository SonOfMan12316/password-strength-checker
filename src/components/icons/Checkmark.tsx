const Checkmark = ({ ...props }) => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18.2272 3.82038L16.7774 2.83581C16.5849 2.70625 16.3491 2.65792 16.1211 2.70133C15.8932 2.74474 15.6916 2.87638 15.5602 3.06762L8.46302 13.5345L5.20075 10.2722C5.03594 10.1092 4.81347 10.0178 4.58166 10.0178C4.34984 10.0178 4.12738 10.1092 3.96256 10.2722L2.72437 11.5128C2.64295 11.5942 2.57836 11.6907 2.53428 11.797C2.49021 11.9033 2.46753 12.0173 2.46753 12.1323C2.46753 12.2474 2.49021 12.3614 2.53428 12.4677C2.57836 12.574 2.64295 12.6705 2.72437 12.7518L7.73933 17.7692C8.02122 18.0495 8.46222 18.266 8.8596 18.266C9.25698 18.266 9.6576 18.0156 9.91525 17.6408L18.4606 5.03596C18.5906 4.84372 18.639 4.60779 18.5952 4.37992C18.5515 4.15204 18.4191 3.95082 18.2272 3.82038Z'
        fill='#F8F8F8'
      />
    </svg>
  );
};

export default Checkmark;
