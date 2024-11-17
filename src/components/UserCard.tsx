import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
   user: any
}
export default function UserCard({ user }: Props) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.phone}</CardDescription>
         </CardHeader>
         <CardContent>
            <p>{user.email}</p>
         </CardContent>
         <CardFooter>
            <Button variant='outline'>ContactUs</Button>
         </CardFooter>
      </Card>
   );
}