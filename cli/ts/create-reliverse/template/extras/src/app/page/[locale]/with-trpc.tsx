import Link from "next/link";

import React from "react";
// @ts-expect-error ...
import { CreatePost } from "~/components/create-post";
// @ts-expect-error ...
import { api } from "~/core/utils/trpc/server";

import styles from "../index.module.css";

export default async function Home() {
	const hello = await api.post.hello({ text: "from tRPC with i18n" });

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					<span className={styles.pinkSpan}>Reliverse App</span> with i18n
				</h1>
				<div className={styles.cardRow}>
					<Link
						className={styles.card}
						href="https://docs.bleverse.com/en/usage/first-steps"
						target="_blank"
					>
						<h3 className={styles.cardTitle}>First Steps →</h3>
						<div className={styles.cardText}>
							Just the basics - Everything you need to know to set up your
							database and authentication.
						</div>
					</Link>
					<Link
						className={styles.card}
						href="https://docs.bleverse.com/en/introduction"
						target="_blank"
					>
						<h3 className={styles.cardTitle}>Documentation →</h3>
						<div className={styles.cardText}>
							Learn more about Create Reliverse App, the libraries it uses, and
							how to deploy it.
						</div>
					</Link>
				</div>
				<div className={styles.showcaseContainer}>
					<p className={styles.showcaseText}>
						{hello ? hello.greeting : "Loading tRPC query..."}
					</p>
				</div>

				<CrudShowcase />
			</div>
		</main>
	);
}

async function CrudShowcase() {
	const latestPost = await api.post.getLatest();

	return (
		<div className={styles.showcaseContainer}>
			{latestPost ? (
				<p className={styles.showcaseText}>
					Your most recent post: {latestPost.name}
				</p>
			) : (
				<p className={styles.showcaseText}>You have no posts yet.</p>
			)}

			<CreatePost />
		</div>
	);
}