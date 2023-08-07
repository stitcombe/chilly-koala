import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
} from '@chakra-ui/react';
import { MdNotificationsNone } from 'react-icons/md';

interface NoticeItem {
  title: string;
  description: string;
  time: string;
}

const Notifications: Array<NoticeItem> = [
  {
    title: 'New user registered',
    description: 'A new user has registered on your website. Check it out!',
    time: '2 hours ago',
  },
  {
    title: 'New job started',
    description: 'A new job has been started.',
    time: '4 hours ago',
  },
];

export default function NotificationMenu() {
  return (
    <Popover placement="bottom" isLazy>
      <PopoverTrigger>
        <IconButton
          aria-label="More server options"
          icon={<MdNotificationsNone />}
          variant="solid"
          w="fit-content"
        />
      </PopoverTrigger>
      <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            {Notifications.map((noticeItem) => (
              <Button
                w="194px"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
              >
                {noticeItem.title}
              </Button>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
