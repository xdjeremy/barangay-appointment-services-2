'use client';
import React, {FC} from 'react';

interface InputProps {
    label: string;
    name: string;
}

const Input: FC<InputProps> = ({label, name}) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input name={name} type="text" placeholder="Type here" className="input input-bordered w-full"/>
        </div>
    )
}

const UserDetailsCard = () => {
    return (
        <div className="bg-zinc-100 px-6 pt-20 pb-28 rounded-2xl w-full">
            <h2 className="text-gray-800 text-4xl font-black leading-7 pl-2.5">User details</h2>

            <div className={'flex flex-col gap-6'}>
                <div className={'mt-16 flex flex-row gap-2'}>
                    <Input name={'lastName'} label={'Last Name'}/>
                    <Input name={'lastName'} label={'Last Name'}/>
                    <Input name={'lastName'} label={'Last Name'}/>
                </div>
                <Input name={'lastName'} label={'Address'}/>
                <Input name={'lastName'} label={'Email Address'}/>
                <div className={'flex flex-row gap-2'}>
                    <Input name={'lastName'} label={'Email Address'}/>
                    <Input name={'lastName'} label={'Email Address'}/>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsCard;