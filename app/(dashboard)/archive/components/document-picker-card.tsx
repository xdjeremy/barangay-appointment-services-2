import React, {FC} from 'react';

const DocumentPickerCard: FC = () => {
    return (
        <div className={'bg-zinc-100 px-6 pt-20 pb-28 rounded-2xl w-full'}>
            <div className="text-gray-800 text-4xl font-black leading-[38px]">
                What type of document do you need?
            </div>
            <div className={'flex flex-col gap-1.5'}>
                <div className={'flex flex-row gap-1.5'}>
                    <div className={'w-full'}>
                        <button className="btn btn-neutral btn-block">Postal ID</button>
                    </div>
                    <div className={'w-full'}>
                        <button className="btn btn-neutral btn-block">Barangay ID</button>
                    </div>
                </div>
                <div className={'flex flex-row gap-1.5'}>
                    <div className={'w-full'}>
                        <button className="btn btn-neutral btn-block">Birth Certificate</button>
                    </div>
                    <div className={'w-full'}>
                        <button className="btn btn-neutral btn-block">Voter's ID</button>
                    </div>
                </div>
                <button className="btn btn-neutral btn-block">Barangay Clearance</button>
                <button className="btn btn-neutral btn-block">Business Clearance</button>
            </div>
            <div className="form-control mt-6">
                <label className="label">
                    <span className="label-text">State your purpose</span>
                </label>
                <textarea className="textarea textarea-bordered h-40 text-black" placeholder="Bio"></textarea>
            </div>
            <div className={'mx-auto flex flex-col items-center'}>

            <button type={'submit'} className={'btn btn-neutral btn-wide mt-5'}>
                Confirm
            </button>
            </div>
        </div>
    );
};

export default DocumentPickerCard;