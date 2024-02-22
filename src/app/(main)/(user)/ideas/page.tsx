import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Ideas = () => {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-3xl mt-20">
        <CardHeader className="space-y-2">
          <CardTitle>Proposez une activité</CardTitle>
          <CardDescription>
            Avez-vous une idée pour une activité de cuisine solidaire ?
            Proposez-la ici !
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" placeholder="Entrez votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Entrez votre email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity">Nom de l'activité</Label>
              <Input id="activity" placeholder="Entrez le nom de l'activité" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description de l'activité</Label>
              <Textarea
                className="min-h-[100px]"
                id="description"
                placeholder="Entrez une description de l'activité"
              />
            </div>
            <div className="space-y-2">
              <Label>Date et heure</Label>
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    className="w-full"
                    id="date"
                    placeholder="Sélectionnez une date"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="participants">Nombre de participants</Label>
              <Input id="participants" placeholder="0" type="number" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex">
          <Button variant="ghost">
            <Link href="/dashboard">Annuler</Link>
          </Button>
          <Button className="ml-auto" type="submit">
            Soumettre
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Ideas;
