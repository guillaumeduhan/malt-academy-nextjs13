'use client';

import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import Loading from './loading'

export default function UsersLayout({ children }: {
  children: React.ReactNode
}) {
  return <section>
    <h1 className="text-3xl font-bold mb-4">Layout users page</h1>
      <Suspense fallback={<Loading />}>
       {/* <ErrorBoundary fallback={<Error />}> */}
         {children}
       {/* </ErrorBoundary> */}
     </Suspense>
  </section>;
}
