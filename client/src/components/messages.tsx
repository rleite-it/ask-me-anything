import { useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@tanstack/react-query';

import Message from './message'
import { getRoomMessages } from '../http/get-room-messages';
import { useMessagesWebsockets } from '../hooks/useMessagesWebsockets';

export default function Messages() {
    const { roomId } = useParams();

    if (!roomId) {
        throw new Error("Messages components must be used withing room page");
    }

    // React 19 new method to work with promises
    //const { messages } = use(getRoomMessages({ roomId }));

    const { data } = useSuspenseQuery({
        queryKey: ["messages", roomId],
        queryFn: () => getRoomMessages({ roomId }),
    });

    useMessagesWebsockets({ roomId });

    const sortedMessages = data.messages.sort((a, b) => b.amountOfReactions - a.amountOfReactions)

    return (<ol className='list-decimal list-outside px-3 space-y-8'>
        {sortedMessages.map((message) => (
            <Message key={`message-${message.id}`} id={message.id} text={message.text} amountOfReactions={message.amountOfReactions} answered={message.answered} />
        ))}
    </ol>
    )
}
