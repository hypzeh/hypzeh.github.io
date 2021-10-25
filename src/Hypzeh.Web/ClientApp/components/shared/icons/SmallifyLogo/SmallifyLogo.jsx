/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  size: PropTypes.number,
};

const defaultProps = {
  size: 80,
};

const SmallifyLogo = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height={size} width={size}>
    <path fill="#1ed760" d="M 14,7 A 7,7 0 0 1 7,14 7,7 0 0 1 0,7 7,7 0 0 1 7,0 7,7 0 0 1 14,7 Z" />
    <path d="m 10.951534,6.9986659 q 0,1.0893738 -0.529124,1.9919959 -0.5291234,0.896399 -1.444197,1.4255232 -0.9026235,0.529124 -1.9670962,0.529124 -1.0769236,0 -1.9857714,-0.535349 Q 4.5646965,10.142287 4.200534,9.7750118 3.8363716,9.4077372 3.5811474,8.968875 3.3259232,8.5300142 3.1920846,8.0320145 q -0.13384,-0.4979997 -0.13384,-1.0333486 0,-1.0831477 0.5291244,-1.9857712 Q 4.1164962,4.104046 5.0191197,3.581147 5.9155187,3.045798 7.0111168,3.045798 q 1.6309463,0 2.7825696,1.145398 1.1578476,1.1578484 1.1578476,2.8074699 z M 14.263229,16 q 0.566473,0 1.157847,-0.591374 Q 16,14.835927 16,14.250779 16,13.970654 15.838151,13.808804 l -2.639395,-2.639395 q -0.161851,-0.16185 -0.441975,-0.16185 -0.143176,0 -0.305025,0.04358 -0.16185,0.04357 -0.323698,0.136948 l -1.151624,-1.15785 q 1.020898,-1.338372 1.020898,-3.0440195 0,-1.3570481 -0.659849,-2.5024465 Q 10.677633,3.3445976 9.5322378,2.6722984 8.9533125,2.329924 8.3245879,2.1649619 7.6958648,2 7.0111168,2 6.0400179,2 5.1311687,2.357937 4.2223209,2.7158741 3.4753214,3.462873 2.7283234,4.2036464 2.3703868,5.1000447 2.0124502,5.9964434 2.0124502,6.9986659 2.0062856,7.683416 2.1743,8.3059134 2.3423742,8.9284122 2.6722982,9.5011116 3.008448,10.067585 3.4566469,10.52201 q 0.4482001,0.454424 1.0333498,0.790574 1.164072,0.684747 2.502444,0.684747 1.6869731,0 3.0377953,-1.033347 l 1.151623,1.151624 q -0.16185,0.298798 -0.16185,0.622497 0,0.2988 0.16185,0.454424 l 2.639395,2.645622 Q 13.995554,16 14.263229,16 Z" />
    <path d="M 8.9034472,8.8726483 C 8.8270402,8.9979528 8.6630276,9.0376825 8.5377231,8.9607691 7.5362106,8.3490226 6.2754296,8.2104746 4.7906296,8.5497107 4.6475503,8.5823122 4.5049272,8.4926626 4.472329,8.3495307 4.4395662,8.2063988 4.5288674,8.0637775 4.6723056,8.0311785 6.2971777,7.6599521 7.6909553,7.8197922 8.8153273,8.5069242 c 0.1253036,0.076916 0.1650341,0.2404214 0.08812,0.3657241 z M 9.4255467,7.7111944 C 9.329277,7.8676709 9.1245123,7.9170802 8.9681368,7.8208108 7.8215545,7.1160524 6.0737728,6.9119509 4.7175864,7.3236193 4.5417031,7.376747 4.3559386,7.2776249 4.3025569,7.1020451 4.2495828,6.9261625 4.3487582,6.7407522 4.5243343,6.6872695 6.0734664,6.2172263 7.9993244,6.4449127 9.3160335,7.2540398 9.4724081,7.3503099 9.5218163,7.5550756 9.4255467,7.7112463 Z M 9.4703676,6.5017588 C 8.0955944,5.6851956 5.8274049,5.6101527 4.5148084,6.0084889 4.3040454,6.0724509 4.0811349,5.9534274 4.0172623,5.7426516 3.9533859,5.5317754 4.0722748,5.3090291 4.2832022,5.2449518 5.7899519,4.7875419 8.241906,4.9528131 9.8247066,5.8924391 c 0,0 0.2968664,0.098955 0.1924164,0.469804 C 9.9574196,6.574223 9.659549,6.6143289 9.4705747,6.5017588 Z" />
  </svg>
);

SmallifyLogo.propTypes = propTypes;
SmallifyLogo.defaultProps = defaultProps;

export default SmallifyLogo;