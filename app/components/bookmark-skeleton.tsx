import { Card, CardContent, Skeleton, Box } from "@mui/material";

export default function BookmarkSkeleton() {
  return (
    <Card sx={{ maxWidth: 345, height: "100%", borderRadius: "10px" }}>
      <Skeleton variant="rectangular" width="100%" height={170} />
      <CardContent>
        <Skeleton variant="text" width="80%" height={32} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="75%" height={20} />
      </CardContent>
    </Card>
  );
}

