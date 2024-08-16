import { FC, useCallback, useState } from "react";
import fincodeClient from "@/lib/fin";
import { create } from "./styles.css";
import { Form } from "./Form";

const tenantUrl = process.env.NEXT_PUBLIC_FINCODE_TENANT_URL ?? "";

export const Create = () => {
	const submit = useCallback(
		async (v: { email: string; password: string; name: string }) => {
			"use server";
			console.log("submit:送信中。。。");
			try {
				const res = await fincodeClient.tenants.createWithNewUser({
					email: v.email,
					password: v.password,
					name: v.name,
					tenant_url_id: tenantUrl,
				});
				console.log("成功", res);
			} catch (e: any) {
				console.log("失敗", e);
			}

			console.log("submit:送信が完了しました");
		},
		[],
	);

	return (
		<div className={create}>
			<h3>CreateTenant</h3>

			<Form submit={submit} />
		</div>
	);
};
