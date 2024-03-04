import React from 'react';
import { AUTHOR_INFO, GITHUB_PAGE } from '../../constants/constants';
import { StyledAuthorInfo } from './AuthorInfo.styles';
interface AuthorInfoProps {}

const AuthorInfo: React.FC<AuthorInfoProps> = () => {
  return <StyledAuthorInfo><a href={GITHUB_PAGE}>{AUTHOR_INFO}</a></StyledAuthorInfo>;
};

export default AuthorInfo;
