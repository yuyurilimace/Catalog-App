import { Divider, Grid } from "@mui/material";

import { IncompletTitleHeader } from "./components/IncompleteTItleHeader";
import { IncompleteTitleCard } from "./components/IncompleteTitleCard";
import { IncompleteTitleCardStack } from "./components/IncompleteTitleCardStack";
import { QuickResumeCard } from "./components/QuickResumeCard";
import { ResumeCard } from "./components/ResumeCard";

export const IncompleteCollectionsSection = () => {
  const incompleteTitle = [
    {
      title: "One Piece",
      lastVolume: 100,
      ownedCollectionAmount: 60,
      missingVolumesAmount: 40,
      collectionProgress: 60,
      lectureProgress: 30,
      missingVolumes: [1, 2, 3, 5, 9, 6, 16],
    },
    {
      title: "Berserk",
      lastVolume: 41,
      ownedCollectionAmount: 35,
      missingVolumesAmount: 6,
      collectionProgress: 85,
      lectureProgress: 80,
      missingVolumes: [12, 13, 14, 25, 26, 27],
    },
    {
      title: "Naruto",
      lastVolume: 72,
      ownedCollectionAmount: 70,
      missingVolumesAmount: 2,
      collectionProgress: 97,
      lectureProgress: 100,
      missingVolumes: [45, 46],
    },
    {
      title: "Chainsaw Man",
      lastVolume: 11,
      ownedCollectionAmount: 5,
      missingVolumesAmount: 6,
      collectionProgress: 45,
      lectureProgress: 45,
      missingVolumes: [6, 7, 8, 9, 10, 11],
    },
    {
      title: "Jujutsu Kaisen",
      lastVolume: 20,
      ownedCollectionAmount: 10,
      missingVolumesAmount: 10,
      collectionProgress: 50,
      lectureProgress: 25,
      missingVolumes: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    },
    {
      title: "Demon Slayer",
      lastVolume: 23,
      ownedCollectionAmount: 22,
      missingVolumesAmount: 1,
      collectionProgress: 95,
      lectureProgress: 95,
      missingVolumes: [23],
    },
    {
      title: "One Piece",
      lastVolume: 100,
      ownedCollectionAmount: 60,
      missingVolumesAmount: 40,
      collectionProgress: 60,
      lectureProgress: 30,
      missingVolumes: [1, 2, 3, 5, 9, 6, 16],
    },
    {
      title: "Berserk",
      lastVolume: 41,
      ownedCollectionAmount: 35,
      missingVolumesAmount: 6,
      collectionProgress: 85,
      lectureProgress: 80,
      missingVolumes: [12, 13, 14, 25, 26, 27],
    },
    {
      title: "Naruto",
      lastVolume: 72,
      ownedCollectionAmount: 70,
      missingVolumesAmount: 2,
      collectionProgress: 97,
      lectureProgress: 100,
      missingVolumes: [45, 46],
    },
    {
      title: "Chainsaw Man",
      lastVolume: 11,
      ownedCollectionAmount: 5,
      missingVolumesAmount: 6,
      collectionProgress: 45,
      lectureProgress: 45,
      missingVolumes: [6, 7, 8, 9, 10, 11],
    },
    {
      title: "Jujutsu Kaisen",
      lastVolume: 20,
      ownedCollectionAmount: 10,
      missingVolumesAmount: 10,
      collectionProgress: 50,
      lectureProgress: 25,
      missingVolumes: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    },
    {
      title: "Demon Slayer",
      lastVolume: 23,
      ownedCollectionAmount: 22,
      missingVolumesAmount: 1,
      collectionProgress: 95,
      lectureProgress: 95,
      missingVolumes: [23],
    },
  ];

  return (
    <Grid size={{ md: 12 }} container spacing={4}>
      <Grid size={{ md: 8, sm: 12 }}>
        <IncompletTitleHeader />
        <IncompleteTitleCardStack>
          {incompleteTitle.map((title, index) => (
            <>
              <IncompleteTitleCard {...title} />
              {index !== incompleteTitle.length - 1 && (
                <Divider variant="fullWidth" sx={{ borderWidth: "1" }} />
              )}
            </>
          ))}
        </IncompleteTitleCardStack>
      </Grid>
      <Grid size={{ md: 4, sm: 12 }} container>
        <ResumeCard />
        <QuickResumeCard />
      </Grid>
    </Grid>
  );
};
