import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { toast } from "sonner";

import { removeMessageReaction } from "../http/remove-message-reaction";
import { createMessageReaction } from "../http/create-message-reaction";

interface MessageProps {
    id: string;
    text: string;
    amountOfReactions: number;
    answered?: boolean;
}

export default function Message({
    id: messageId,
    text,
    amountOfReactions,
    answered = false
}: MessageProps) {
    const { roomId } = useParams();
    const [hasReacted, setHasReacted] = useState(false);

    const createMessageReactionAction = async () => {
        if (!roomId) return;

        try {
            await createMessageReaction({ roomId, messageId });
        } catch (err) {
            toast.error("Failed to upvote question!")
        }

        setHasReacted(true)
    }

    const removeMessageReactionAction = async () => {
        if (!roomId) return;

        try {
            await removeMessageReaction({ roomId, messageId });
        } catch (err) {
            toast.error("Failed to upvote question!")
        }

        setHasReacted(false)
    }

    return (
        <li data-answered={answered} className='ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none'>
            {text}

            {hasReacted ? (
                <button
                    type='button'
                    onClick={removeMessageReactionAction}
                    className='mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500'
                >
                    <ArrowUp className='size-4' />
                    Upvote question ({amountOfReactions})
                </button>) : (
                <button
                    type='button'
                    onClick={createMessageReactionAction}
                    className='mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300'
                >
                    <ArrowUp className='size-4' />
                    Upvote question ({amountOfReactions})
                </button>
            )}

        </li>
    )
}
