'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form';
import 'react-phone-number-input/style.css';
import ConsultationButton from '@/components/common/ConsultationButton';

interface ContactFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    agree: boolean;
}

const defaultValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
};

export default function ContactForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormValues>({ defaultValues });

    const onSubmit = (data: ContactFormValues) => {
        console.log(data);
    };

    const inputBaseClass = "w-full text-sm text-desc bg-transparent border-none outline-none placeholder:text-desc";
    const fieldWrapperClass = "w-full rounded-xl border border-secondary/20 px-5 py-3 focus-within:border-accent transition-colors";
    const labelClass = "text-sm font-medium text-secondary mb-1.5 block";

    return (
        <section className="bg-white py-10 sm:py-10">
            <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
                <div className="grid overflow-hidden rounded-[20px] border border-solid border-secondary/20 bg-white md:grid-cols-2">
                    {/* Left - Image (from 768px: image left, form right) */}
                    <div className="relative order-2 min-h-0 h-[400px] md:order-1 md:h-full">
                        <Image
                            src="/images/john.png"
                            alt="Contact"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Right - Form */}
                    <div className="order-1 py-6 md:order-2 md:py-8 px-10">
                        <div className="mx-auto md:mx-0">
                            {/* Header – font scale matches AboutSection */}
                            <div className="mb-4">
                                <h1 className="text-2xl font-bold leading-tight tracking-wide text-secondary sm:text-2xl sm:leading-snug md:text-3xl md:leading-normal lg:text-[32px] xl:text-[32px]">
                                    Get in touch
                                </h1>
                                <p className="mt-1.5 text-sm font-normal leading-relaxed text-desc sm:mt-2 sm:text-base lg:text-[16px]">
                                    Have questions? We’re here to help. Contact us to discuss your legal needs.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Name Fields – single line on all screens, including below 640px */}
                                <div>
                                    <div className="flex flex-nowrap gap-2 sm:gap-4 mb-1.5">
                                        <span className="min-w-0 flex-1 text-sm font-medium text-secondary">First name</span>
                                        <span className="min-w-0 flex-1 text-sm font-medium text-secondary">Last name</span>
                                    </div>
                                    <div className="flex flex-nowrap gap-2 sm:gap-4">
                                        <div className="min-w-0 flex-1">
                                            <div className={fieldWrapperClass}>
                                                <input
                                                    type="text"
                                                    placeholder="First name"
                                                    className={inputBaseClass}
                                                    {...register('firstName', { required: 'First name is required' })}
                                                />
                                            </div>
                                            {errors.firstName && (
                                                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className={fieldWrapperClass}>
                                                <input
                                                    type="text"
                                                    placeholder="Last name"
                                                    className={inputBaseClass}
                                                    {...register('lastName', { required: 'Last name is required' })}
                                                />
                                            </div>
                                            {errors.lastName && (
                                                <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className={labelClass}>Email</label>
                                    <div className={fieldWrapperClass}>
                                        <input
                                            type="email"
                                            placeholder="alexander.thompson@example.com"
                                            className={inputBaseClass}
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Phone - country select + number */}
                                <div>
                                    <label className={labelClass}>Phone number</label>
                                    <div
                                        className={`${fieldWrapperClass} !flex items-center [&_.PhoneInput]:!w-full [&_.PhoneInputInput]:!border-none [&_.PhoneInputInput]:!outline-none [&_.PhoneInputInput]:!ring-0 [&_.PhoneInputInput]:!bg-transparent [&_.PhoneInputInput]:!text-sm [&_.PhoneInputInput]:!text-desc [&_.PhoneInputInput]:!placeholder-desc [&_.PhoneInputCountrySelect]:!border-none [&_.PhoneInputCountrySelect]:!bg-transparent`}
                                    >
                                        <PhoneInput
                                            name="phone"
                                            control={control}
                                            rules={{ required: 'Phone number is required' }}
                                            defaultCountry="US"
                                            international
                                            countryCallingCodeEditable={false}
                                            placeholder="+1 (555) 876-5432"
                                            numberInputProps={{ placeholder: '+1 (555) 876-5432' }}
                                            className="!w-full"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className={labelClass}>Message</label>
                                    <div className={fieldWrapperClass}>
                                        <textarea
                                            placeholder="Leave us a message..."
                                            rows={4}
                                            className={`${inputBaseClass} resize-none`}
                                            {...register('message', { required: 'Message is required' })}
                                        />
                                    </div>
                                    {errors.message && (
                                        <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        className="mt-1 w-4 h-4 rounded border-secondary/30 text-accent"
                                        {...register('agree', { required: 'Please agree to continue' })}
                                    />
                                    <label htmlFor="agree" className="text-sm text-desc">
                                        You agree to our friendly privacy policy
                                    </label>
                                </div>
                                {errors.agree && (
                                    <p className="text-xs text-red-500">{errors.agree.message}</p>
                                )}

                                {/* Submit Button */}
                                <ConsultationButton
                                    type="submit"
                                    text="Schedule Your Case Review"
                                    variant="dark"
                                    widthClassName="max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[600px]"
                                    className="justify-center text-center"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}