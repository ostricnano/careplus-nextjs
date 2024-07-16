import PatientForm from "@/components/forms/PatientForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1  flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />

          <p className="copyright py-12">
            ℗ 2024 Care plus
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt="Doctor"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Register;
