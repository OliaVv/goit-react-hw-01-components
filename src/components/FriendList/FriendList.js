import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ items }) => {
    //console.log(friends);
    return (<ul class="friend-list">
        {items.map(({avatar, name, isOnline, id}) => <li key={id}>
            <FriendListItem avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        </li>)}
        </ul >
        )
    };
