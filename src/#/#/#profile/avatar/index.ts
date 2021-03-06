import { connect } from 'react-redux';

import ImgFieldRound from '@components/img-field-round';

import { uploadAvatar } from '#/@store/identity';

const mapDispatch = {
  uploadFile: uploadAvatar,
};

export default connect(undefined, mapDispatch)(ImgFieldRound);
