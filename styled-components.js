/**
 * It's a simple component which will render a user profile
 * with name and picture provided by the user.
 */
import styled from 'styled-components';

const ProfilePicutre = styled.div.attrs({
    style: props => ({
      backgroundImage: `url('${props.src}')`,
    }),
  })`
    background-size: cover;
    height: 50px;
    width: 50px;
  `;

const UserProfile = ({ name, picture }) => (
  <div>
    <ProfilePicutre src={picture} />
    <span>{name}</span>
  </div>
);

export default UserProfile;
