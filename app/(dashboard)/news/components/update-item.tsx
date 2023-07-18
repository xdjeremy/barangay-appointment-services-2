import React, {FC} from 'react';

interface Props {
    text: string;
}

const UpdateItem: FC<Props> = ({
                                   text
                               }) => {
    return (
        <div className={'text-black text-xl font-normal block pt-12 pb-2'}>
            {text}
        </div>
    );
};

export default UpdateItem;